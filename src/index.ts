import { createJiti } from 'jiti';
import path from 'node:path';
import { defu } from 'defu';
import babelPluginUntyped from 'untyped/babel-plugin';

// const jitiOptions = { fsCache: false, moduleCache: false }
const jitiOptions = {  moduleCache: false }

const options: {
    jiti?: any
} = { jiti: jitiOptions };
const jiti = createJiti(
    process.cwd(),
        defu(options.jiti, {
          interopDefault: true,
          transformOptions: {
            babel: {
              plugins: [[babelPluginUntyped, { experimentalFunctions: true }]]
            }
          }
        })
);

const rawSchema = await jiti.import(path.join(__dirname, 'func1.ts'));

console.log(rawSchema);
