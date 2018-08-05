var path=require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports={
  entry:"./www/app/main.js",
  output:{
    path:path.resolve(__dirname,"./www/dist"),
    filename:"all.js"
   },
  module : {
    rules : [
      {
        test : /\.js$/ ,
        use :[
          {
            loader : "babel-loader",
            options : {
              presets:["env","react"],
              plugins:["transform-object-rest-spread","transform-runtime"]
            }

          }
        ],
         include : [
           path.resolve(__dirname,"www/app")
         ],
        exclude : [
           path.resolve(__dirname,"node_modules")
        ]
      },
      {
        test : /\.less$/ ,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","less-loader"]
        }),
        include : [
           path.resolve(__dirname,"www/app")
         ],
        exclude : [
           path.resolve(__dirname,"node_modules")
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  watch:true
}
