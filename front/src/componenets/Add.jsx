import React from 'react'
import { Link } from 'react-router-dom';
export default function Add() {
  return (
    <Link to ="/notes/new" className="floating-button text-dark">
        <h1>+</h1>
    </Link>
  )
}
