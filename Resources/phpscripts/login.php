<?php
	session_save_path("C:\Temp");
	session_start();
	
	$username = "root";
	//Enter password before using
	$password = "";
	$dsn = "TenjinPHP";
	
	$conn = odbc_connect($dsn, $username, $password);
	if (isset($_POST['signup'])) {
		signUpUser($conn);
	}
	if (isset($_POST['login'])) {
		loginUser($conn);
	}

	function loginUser($conn)
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$verifyQry = odbc_prepare($conn, "SELECT * FROM userbase WHERE username=?");
		$existsBool = odbc_execute($verifyQry, array($username));
		if (odbc_num_rows($verifyQry) == 1) {
			$passwordArr = odbc_fetch_array($verifyQry);
			$firstname = $passwordArr['firstname'];
			$lastname = $passwordArr['lastname'];
			$passwordDatabase = $passwordArr['password'];
			if (password_verify($password, $passwordDatabase)) {
				$_SESSION["username"] = $username;
				$_SESSION["firstname"] = $firstname;
				$_SESSION["lastname"] = $lastname;
				header("Location: ./../../homescreen.php");
				die();
			}
			else
			{
				$_SESSION["username"] = $username;
				header("Location: ./../../page-login.php");
				die();
			}
		}
		else
		{
			$_SESSION["username"] = $username;
			header("Location: ./../../page-login.php");
			die();
		}
	}

	function signUpUser($conn)
	{
		$firstname = $_POST['firstname'];
		$lastname = $_POST['lastname'];
		$username = $_POST['username'];
		$password = $_POST['password'];
		$hash = password_hash($password, PASSWORD_BCRYPT);

		$checkQry = odbc_prepare($conn, "SELECT * FROM userbase WHERE username=?");
		$existsBool = odbc_execute($checkQry, array($username));

		if(odbc_num_rows($checkQry) == 1)
		{
			$_SESSION["postData"] = $_POST;
			header("Location: ./../../page-signup.php");
			die();
		}
		else
		{
			$insertQry = odbc_prepare($conn, "INSERT INTO userbase (username, password, firstname, lastname) VALUES (?,?,?,?)");
			$res = odbc_execute($insertQry, array($username, $hash, $firstname, $lastname));
			$_SESSION["username"] = $username;
			$_SESSION["firstname"] = $firstname;
			$_SESSION["lastname"] = $lastname;
			header("Location: ./../../homescreen.php");
			die();
		}
		exit();
	}
?>