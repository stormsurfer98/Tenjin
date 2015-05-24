<!DOCTYPE html>
<?php
	session_start();
	$firstname = "";
	$lastname = "";
	$display ="none";
	$placeholder = "Username";
	if (isset($_SESSION['postData'])) {
		$firstname = $_SESSION['postData']['firstname'];
		$lastname = $_SESSION['postData']['lastname'];
		$display = "";
	}
	session_destroy();
?>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<meta content="initial-scale=1.0, width=device-width" name="viewport">
	<title>Signup - Tenjin</title>
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
										<form class="form" action="Resources/phpscripts/login.php" method = "post" name = 'signup'>
											<div class="form-group form-group-label" style="display: <?php echo $display; ?>">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" style="color: red">Username Taken</label>
														
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-username">First Name</label>
														<input class="form-control" id="login-first" onkeyup="checkIfFilled()" type="text" name = "firstname" value= <?php echo $firstname; ?>>
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-username">Last Name</label>
														<input class="form-control" id="login-last" onkeyup="checkIfFilled()" type="text" name = "lastname" value= <?php echo $lastname; ?>>
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-username"><?php echo $placeholder ?></label>
														<input class="form-control" id="login-email" onkeyup="checkIfFilled()" type="text" name = "username">
													</div>
												</div>
											</div>
											<div class="form-group form-group-label">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<label class="floating-label" for="login-password">Password</label>
														<input class="form-control" id="login-password" onkeyup="checkIfFilled()" type="password" name = "password">
													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="row">
													<div class="col-md-10 col-md-push-1">
														<button id="submitButton"  type = "submit" class="btn btn-block btn-yellow waves-button waves-effect waves-light" name="signup" disabled>Signup</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
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
			var first = document.forms['signup']['firstname'].value;
			var last = document.forms['signup']['lastname'].value;
			var username = document.forms['signup']['username'].value;
			var password = document.forms['signup']['password'].value;
			if (first != "" && first != null && last != "" && last != null && username != "" && username != null && password != "" && password != null) {
				document.getElementById('submitButton').removeAttribute("disabled");
			};
		}
	</script>

</body>
</html>