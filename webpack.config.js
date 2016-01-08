'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
					main: ["./main", "file?name=index.html!jade-html!./main.jade"],
					bootstrap: "./_bootstrap",
					vendor: "jquery",
	 			},
	 
	output: {
	
	path: path.join(__dirname, 'build'),
	filename: 'javascripts/[name].js',

	},

	module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel',
	      query: {
	        presets: ['es2015']
	      }
	    },
	   
	  	{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
			},  
	    {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, 'src'))
			},
			{
				test: /\.(woff|woff2?|ttf|eot|svg)$/,
        loaders: [ 'url?limit=10000&name=fonts/[name].[ext]' ],
      },
      {
				test: /\.(jpg|png)$/,
        loaders: [ 'file?name=images/[name].[ext]' ],
      }, 
       /*{
	    	test: /bootstrap-sass\/assets\/javascripts\//, 
	    	loader: 'imports?jQuery=jquery' 
	    },*/	
	  ]
	},

	

  plugins: [
    
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"main", /*filename= */"javascripts/main.js", ["_bootstrap", "jquery"]),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  resolve: {
  			extensions: ['', '.js', '.scss'],
        modulesDirectories: ['node_modules', 'src']
  },

  watch: true,

 

	devtool: "source-map"
}