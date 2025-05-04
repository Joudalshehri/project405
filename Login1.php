<?php
// Set headers to allow cross-origin requests and JSON responses
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection credentials
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'mustarad_db';

// Connect to the database
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check for connection errors
if (mysqli_connect_errno()) {
    echo json_encode(['success' => false, 'message' => 'فشل الاتصال بقاعدة البيانات']);
    exit();
}

// Get JSON input from frontend and extract username/password
$data = json_decode(file_get_contents("php://input"), true);
$username = trim($data['username'] ?? '');
$password = trim($data['password'] ?? '');

// Check if username or password is empty
if (empty($username) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'يرجى إدخال اسم المستخدم وكلمة المرور'], JSON_UNESCAPED_UNICODE);
    exit();
}

// Validate user credentials against the student table
$sql = "SELECT * FROM student WHERE username = ? AND password = ?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $username, $password);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);

// If user is found, return success response
if (mysqli_num_rows($result) > 0) {
    echo json_encode(['success' => true, 'message' => 'تم تسجيل الدخول بنجاح'], JSON_UNESCAPED_UNICODE);
} else {
    // If no match, return error response
    echo json_encode(['success' => false, 'message' => 'بيانات الدخول غير صحيحة'], JSON_UNESCAPED_UNICODE);
}

// Close database connection
mysqli_close($conn);
?>
