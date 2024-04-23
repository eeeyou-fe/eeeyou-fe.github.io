module.exports = {
  // 在单独的箭头函数参数周围包括括号
  // always：(x) => x
  // avoid：x => x
  arrowParens: 'always',
  // 将多行 HTML元素的 > 放在最后一行的末尾，而不是单独放在下一行
  bracketSameLine: true,
  // 在对象字面量中的括号之间打印空格
  bracketSpacing: true,
  // 是否格式化嵌入在文件中的引用代码
  embeddedLanguageFormatting: 'auto',
  // 换行符使用 lf
  endOfLine: 'lf',
  // 指定HTML文件的全局空格敏感度
  htmlWhitespaceSensitivity: 'css',
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 一行最多多少个字符
  printWidth: 200,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 更改引用对象属性的时间
  quoteProps: 'as-needed',
  // 指定要使用的解析器，不需要写文件开头的 @prettier
  requirePragma: false,
  // 在语句末尾是否需要分号
  semi: true,
  // 在 HTML 中每行强制执行单个属性
  singleAttributePerLine: false,
  // 是否使用单引号
  singleQuote: true,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 多行时尽可能打印尾随逗号
  trailingComma: 'all',
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // Vue文件脚本和样式标签缩进
  vueIndentScriptAndStyle: false,
  // 这两个选项可用于格式化以给定字符偏移量开始和结束的代码
  rangeStart: 0,
  rangeEnd: Infinity,
};
