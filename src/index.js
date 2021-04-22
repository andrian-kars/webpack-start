import { Post } from './Post'
import json from './assets/json'
import logo from './assets/webpack-logo.png'
import './styles/style.css'

const post = new Post('Webpack Post Title', logo)

console.log('Post to String:', post.toString())

console.log('JSON:', json)