
<nav style="background-color: lightslategray;" >
    <div class="nav-wrapper">
        <a href="#!" class="brand-logo"></a> 
        <a href="#"  data-activates="mobile-demo" class="button-collapse">
            <i	class="material-icons">menu</i></a>

        <ul class="right hide-on-med-and-down">
            <li><a href="index.php" class="white-text">Inicio</a></li>
            <!-- Dropdown Trigger -->
            <li><a class="dropdown-trigger white-text" href="#!" data-target="menu_stock">Stock<i class="material-icons right">arrow_drop_down</i></a></li>
            <!-- Dropdown Structure -->
            <ul id="menu_stock" class="dropdown-content">
                <li><a class="stock" href="#!">ABM Artículos</a></li>
                <li><a href="#!">Ver Artículos</a></li>
                <!--<li class="divider"></li>
                <li><a href="#!"></a></li>-->
            </ul>
            <li><a class="servicio white-text" href="#!">Servicios</a></li>
            <li><a class="clientes white-text" href="#!">Clientes</a></li>
            <li><a href="#!" class="ventas white-text">Ventas</a></li>
            <li><a href="#!" class="reportes white-text">Reportes</a></li>
            <li><a href="logout.php" class="reportes white-text">Salir</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
            <li><a href="index.php" class="black-text">Inicio</a></li>
            <li><a class="dropdown-trigger stock white-text" href="#!" data-target="dropdown1">Stock<i class="material-icons right">arrow_drop_down</i></a></li>   
            <li><a class="servicio black-text" href="#!">Servicios</a></li>
            <li><a class="clientes black-text" href="#!">Clientes</a></li>
            <li><a href="#!" class="ventas black-text">Ventas</a></li>
            <li><a href="#!" class="reportes black-text">Reportes</a></li>
            <li><a href="logout.php" class="reportes black-text">Salir</a></li>
        </ul>
    </div>

</nav>
<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
<nav>
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
        