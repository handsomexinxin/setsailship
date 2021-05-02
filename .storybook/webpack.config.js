module.exports = ({ config }) => {
  config.module.rules.push(...[
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        }, 
        {
          loader: require.resolve("react-docgen-typescript-loader"),// 文本更好的展示props数据
          options: {
            shouldExtractLiteralValuesFromEnum: true,// 将枚举等转换成文本形式
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            }
          }
        }
      ]
    },
    {
      test:/\.scss$/,
      use:['style-loader','css-loader','sass-loader']
  }
  ]);

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
