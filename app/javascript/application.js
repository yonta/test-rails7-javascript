// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import "bootstrap/dist/css/bootstrap.min.css";

import { Tooltip, Popover } from "bootstrap"

var popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  return new Popover(popoverTriggerEl)
})

var tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new Tooltip(tooltipTriggerEl)
})
