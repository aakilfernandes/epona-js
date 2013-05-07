<?PHP session_start(); if(!isset($_SESSION['user_id'])){ ?>
      <div class="navbar-inner">
        <div class="container">
        	<a class="brand">PHAPPLEJAX</a>
          	<div class="nav-collapse collapse">
	          	<ul class="nav nav-pills">
	          		<li>
	              		<a class="nav-home selected" href="#!home" style="margin-left:140px;">
	                		Home
	              		</a>
	            	</li>
	            	<li class="" style="float:right;">
						<div class="btn-group">
							<a class="btn" href="#modal/login">Log In</a>
							<a class="btn btn-primary" href="#modal/signup">Sign Up</a>
						</div>
	            	</li>
	          	</ul>
	        </div>
	        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
	        	<span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	        </button>
        </div>
      </div>
<?PHP }else{ ?>
      <div class="navbar-inner">
        <div class="container">
        	<a class="brand">PHAPPLEJAX</a>
          	<div class="nav-collapse collapse">
	          	<ul class="nav nav-pills">
	          		<li>
	              		<a class="nav-home selected" href="#!home" style="margin-left:140px;">
	                		Home
	              		</a>
	            	</li>
	            	<li class="" style="float:right;">
	            		<div class="btn-group">
							<a class="btn" href="#modal/logout">Log Out</a>
							<a class="btn" href="#modal/settings">Settings</a>
						</div>
	            	</li>
	          	</ul>
	        </div>
	        <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
	        	<span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	        </button>
        </div>
      </div>
<?PHP } ?>