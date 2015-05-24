<!DOCTYPE html>
<?php
	session_start();
	$display = "none";
	$username = "";
	if (isset($_SESSION['username'])) {
		$display = "";
		$username = $_SESSION['username'];
	}
	session_destroy();  
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="initial-scale=1.0, width=device-width" name="viewport">
	<title>Login - Tenjin</title>
	<link href="Design/css/base.min.css" rel="stylesheet">
</head>
<body class="avoid-fout page-yellow">
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
	<header class="header">
		<span class="header-logo"><img alt="TENJIN" src="Design/images/users/logo2.png"></span>
	</header>
	<div class="content">
		<div class="content-heading"></div>
		<div class="menu-content-inner">
            <div class="container">
				<div class="row">
					<div class="col-lg-4 col-lg-push-4 col-sm-6 col-sm-push-3">
						<div class="card-wrap">
							<div class="card">
								<div class="card-main">
                                    <div id="particles-js"></div>
                                    <div class="count-particles"> </div>
                                    <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
                                    <script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
									<script src="Design/js/index.js"></script>
									<div class="card-inner">
										<form class="form" action="Resources/phpscripts/login.php" method = "post" name = "login">
										<div class="form-group form-group-label" style="display: <?php echo $display; ?>">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" style="color: red">Username/Password Incorrect</label>
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-username">Username</label>
														<input class="form-control" id="login-username" type="text" name = "username" onkeyup="checkIfFilled()" value="<?php echo $username; ?>">
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-password">Password</label>
														<input class="form-control" id="login-password" type="password" name = "password" onkeyup="checkIfFilled()">
													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<button type = "submit" id="submitButton" class="btn btn-block btn-yellow waves-button waves-effect waves-light" name="login" disabled>Sign In</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="clearfix">
							<p class="margin-no-top pull-right"><a href="page-signup.php">Create an account</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div class="progress">
								<div class="load-bar-base">
									<div class="load-bar-content">
										<div class="load-bar-progress"></div>
										<div class="load-bar-progress load-bar-progress-alt"></div>
										<div class="load-bar-progress load-bar-progress-purple"></div>
										<div class="load-bar-progress load-bar-progress-red"></div>
									</div>
								</div>
							
						</div>
	<script src="Design/js/base.min.js" type="text/javascript"></script>
	<script>
		function checkIfFilled () {
			var username = document.forms['login']['username'].value;
			var password = document.forms['login']['password'].value;
			if (username != "" && username != null && password != "" && password != null) {
				document.getElementById('submitButton').removeAttribute("disabled");
			};
		}
	</script>
</body>
</html>