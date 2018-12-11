
<nav style="background-color: lightslategray;" >
    <div class="nav-wrapper">
        <a href="#!" class="brand-logo"></a> 
        <a href="#"  data-activates="mobile-demo" class="button-collapse">
            <i	class="material-icons">menu</i></a>

        <ul class="left hide-on-med-and-down">
            <li><a href="index.php" class="white-text">Inicio</a></li>
          
            <li><a class="dropdown-button white-text" href="#!" data-activates="menu_stock">Stock<i class="material-icons right">arrow_drop_down</i></a></li>
           
            <li><a class="servicio white-text" href="#!">Servicios</a></li>
            <li><a class="clientes white-text" href="#!">Clientes</a></li>
            <li><a href="#!" class="ventas white-text">Ventas</a></li>
            <li><a href="#!" class="reportes white-text">Reportes</a></li>
            <li><a href="logout.php" class="reportes white-text">Salir</a></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
            <li><a href="index.php" class="black-text">Inicio</a></li>
            <li><a class="dropdown-button black-text" href="#!" data-activates="menu_stock_movil">Stock<i class="material-icons right">arrow_drop_down</i></a></li>

            <li><a class="servicio black-text" href="#!">Servicios</a></li>
            <li><a class="clientes black-text" href="#!">Clientes</a></li>
            <li><a href="#!" class="ventas black-text">Ventas</a></li>
            <li><a href="#!" class="reportes black-text">Reportes</a></li>
            <li><a href="logout.php" class="reportes black-text">Salir</a></li>
        </ul>
    </div>

</nav>

<!-- Dropdown Structure Stock-->
<ul id="menu_stock" class="dropdown-content">
    <li><a class="abmStock black-text" href="#!">Alta de Artículos</a></li>
    <li><a class="stock black-text" href="#!">Ver Artículos</a></li>
    <!--<li class="divider"></li>
    <li><a href="#!"></a></li>-->
</ul>
<!-- Dropdown Structure Stock Movil-->
<ul id="menu_stock_movil" class="dropdown-content">
    <li><a class="abmStock black-text" href="#!">Alta de Artículos</a></li>
    <li><a class="stock black-text" href="#!">Ver Artículos</a></li>
    <!--<li class="divider"></li>
    <li><a href="#!"></a></li>-->
</ul>