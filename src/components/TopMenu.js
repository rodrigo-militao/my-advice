import React from 'react';

function TopMenu() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <form class="d-flex">
          <input class="form-control mr-2" type="text" placeholder="Width" aria-label="Width"/>
          <input class="form-control mr-2" type="text" placeholder="Height" aria-label="Height"/>
          <input class="form-control mr-2" type="text" placeholder="Background" aria-label="Background"/>
          <input class="form-control mr-2" type="text" placeholder="Font-Color" aria-label="Font-Color"/>
        </form>
      </div>
    </nav>
  );
}

export default TopMenu;