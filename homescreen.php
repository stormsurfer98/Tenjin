<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta content="IE=edge" http-equiv="X-UA-Compatible">
		<meta content="initial-scale=1.0, width=device-width" name="viewport">
		<title>Listen Mode</title>
		<link href="Design/cardfiles/css/base.min.css" rel="stylesheet">
		<script type="text/javascript" src = "Resources/jsScripts/master.js"></script>
		<script type="text/javascript" src = "Resources/jsScripts/makeCards.js"></script>
		<script type="text/javascript" src = "Resources/jsScripts/jQuery-2.1.4.js"></script>
	</head>
	<body class="avoid-fout">
		<div class="avoid-fout-indicator avoid-fout-indicator-fixed">
			<div class="progress-circular progress-circular-alt progress-circular-center">
				<div class="progress-circular-wrapper">
					<div class="progress-circular-inner">
						<div class="progress-circular-left">
							<div class="progress-circular-spinner"></div>
						</div>
						<div class="progress-circular-gap"></div>
						<div class="progress-circular-right">
							<div class="progress-circular-spinner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<header class="header" style="background-color: #181922">
			<a class="header-logo" href="index.html"><img src="Design/images/logo2.png" style="padding-top: 10px; padding-left: 18px; height: 102px"></a>
		</header>
		<nav class="menu menu-right" id="profile" style="background-color: #181922">
			<div class="menu-scroll">
				<div class="menu-wrap">
					<div class="menu-top">
						<div class="menu-top-img">
							<img alt="John Smith" src="Design/cardfiles/images/samples/landscape.jpg">
						</div>
						<div class="menu-top-info">
							<a class="menu-top-user" href="javascript:void(0)"><span class="avatar pull-left"><img alt="alt text for John Smith avatar" src="Design/cardfiles/images/users/avatar-001.jpg"></span>John Smith</a>
						</div>
					</div>
					<div class="menu-content">
						<ul class="nav">
							<li>
								<a href="javascript:void(0)"><span class="icon icon-account-box"></span>Profile Settings</a>
							</li>
							<li>
								<a href="javascript:void(0)"><span class="icon icon-add-to-photos"></span>Upload Photo</a>
							</li>
							<li>
								<a href="page-login.html"><span class="icon icon-exit-to-app"></span>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
		<div class="menu menu-right menu-search" id="search">
			<div class="menu-scroll">
				<div class="menu-wrap">
					<div class="menu-top">
						<div class="menu-top-info">
							<form class="form-group-alt menu-top-form">
								<label class="access-hide" for="menu-search">Search</label>
								<input class="form-control form-control-inverse menu-search-focus" id="menu-search" placeholder="Search" type="search">
								<button class="access-hide" type="submit">Search</button>
							</form>
						</div>
					</div>
					<div class="menu-content">
						<div class="menu-content-inner">
							<hr>
							<p><strong>Suggested Search Queries:</strong></p>
							<ul>
								<li><a href="javascript:void(0)">Events</a></li>
								<li><a href="javascript:void(0)">People</a></li>
								<li><a href="javascript:void(0)">Definitions</a></li>
								<li><a href="javascript:void(0)">Favorites</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="content-heading" style="background-color: #181922">
				<div class="container">
					<h2 class="heading">Notecards (Live Feed)</h1>
				</div>
			</div>
			<div class="content-inner">
				<div id="cardHolder" class="container">
					<h2 id="testParagraph" class="content-sub-heading"></h2>
							
						</div>
		<footer class="footer">
			<div class="container">
				<p>&copy; Tenjin. All rights reserved.</p>
			</div>
		</footer>
		<div class="fbtn-container">
		</div>

		<script src="Design/cardfiles/js/base.min.js" type="text/javascript"></script>
	</body>
	</html>