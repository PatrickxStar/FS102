 const header = document.getElementsByTagName("header")
 const section = document.querySelectorAll("section")
 const currentSec = document.querySelector('section.current')
 const afterCurrent = currentSec.nextElementSibling
 const h2 = currentSec.previousElementSibling.children[0]
 const highlight = document.querySelectorAll("h2.highlight")
 const secH2 = Array.from(document.querySelectorAll("section")).filter(section => section.querySelector("h2"));