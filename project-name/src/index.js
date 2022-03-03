import React from'react'
import ReactDom from'react-dom'
import {App, Hey} from'./App'

//render("what to show, where to show")
ReactDom.render(
    <>
<h1>this is about react components</h1>
<p>project</p>
<App></App>
<Hey></Hey>
</>
,document.getElementById("root")
)