const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



