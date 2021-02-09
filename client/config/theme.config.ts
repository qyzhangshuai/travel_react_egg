/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:05:27
 * @LastEditTime: 2021-02-09 10:14:41
 * @LastEditors: zs
 */
import fs from 'fs'
import path from 'path'
import lessToJs from 'less-vars-to-js'

const themePath = path.join(__dirname, '../src/style/themes.less')
const themeVariables = lessToJs(fs.readFileSync(themePath, 'utf8'))

export default themeVariables