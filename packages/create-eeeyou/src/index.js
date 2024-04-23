import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import prompts from 'prompts';
import minimist from 'minimist';
import { red, green } from 'kolorist';

const cwd = process.cwd();
const types = ['web', 'uni'];
const argv = minimist(process.argv.slice(2), { string: ['_'] });

async function init() {
  const questions = [{
    name: 'name',
    message: '请输入项目目录名称',
    type: argv._[0] ? null : 'text',
  }, {
    name: 'template',
    message: '请选择要创建的模板',
    type: argv.t && types.includes(argv.t) ? null : 'select',
    choices: [
      { title: green('web'), value: 'web' },
      { title: red('uni'), value: 'uni' },
    ],
    initial: 0
  }, {
    name: 'overwrite',
    message: (prev, values) => `${dir(values.name, prev)}文件夹已存在，是否覆盖？`,
    type: (prev, values) => !fs.existsSync(dir(values.name, prev)) ? null : 'confirm',
    initial: true
  }];
  const answer = await prompts(questions);
  const { name, template, overwrite } = answer;
  const targetDir = dir(name, template);
  const root = path.join(cwd, targetDir);
  const indexPath = url.fileURLToPath(import.meta.url);
  const templateDir = path.resolve(indexPath, '../..', `template-${argv.t || template}`);
  if (!fs.existsSync(root) || overwrite) {
    if (overwrite) {
      fs.rmSync(root, { recursive: true });
    }
    fs.mkdirSync(root, { recursive: true });
    const files = fs.readdirSync(templateDir);
    for (const file of files) {
      const target = path.join(root, file);
      copy(path.join(templateDir, file), target)
    }
  }
}

function dir(name, template) {
  return argv._[0] || name || `eeeyou-${argv.t || template}`;
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.resolve(src, file);
      const destFile = path.resolve(dest, file);
      copy(srcFile, destFile);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

init().catch((e) => {
  console.error(e);
})
// https://chinabigpan.github.io/prompts_docs_cn/
// https://github.com/marvinhagemeister/kolorist