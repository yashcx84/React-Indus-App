import React from 'react'

function Footer() {
  const dateObj = new Date();
  return (
    <footer>
      <p>wedlock@{dateObj.getFullYear()}</p>
    </footer>
  )
}
export default Footer
