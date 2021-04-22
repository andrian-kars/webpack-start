import * as $ from 'jquery'
import { Post } from '@models/Post'
// import json from './assets/json'
import logo from './assets/webpack-logo.png'
import './styles/style.css'

const post = new Post('Webpack Post Title', logo)

$('pre').addClass('code').html(post.toString())

console.log('Post to String:', post.toString())

// console.log('JSON:', json)