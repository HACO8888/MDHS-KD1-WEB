import axios from "axios";


const api = axios.create({
	baseURL: "https://newmdcloud.loca.lt"
});

function Read() {
	api.post("/cloud/database/read",
		JSON.stringify(),
		{
			headers: {
				"access-control-expose-headers": "Authorization",
				"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJRMTI0NzUxNTcxIiwidXNlclBXRCI6ImFhYWFAbmV3bWQiLCJyZW1lbWJlck1lIjoidHJ1ZSIsImlhdCI6MTY2NDExNDg5NiwiZXhwIjoxNjY0NzE5Njk2fQ.oCVYRmY15E5556hBN3zxK8sEeTPskpkJyj3Qd6D03_Q",
				"Content-Type": "application/json",
				"Bypass-Tunnel-Reminder": "true",
			},
		}
	).then(function(response) { console.log(response) })
}

Read();

export default function Course() {
	return (
		<div>
			<br />
			Course
		</div>
	)
}
