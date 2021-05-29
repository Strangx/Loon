// The availabel variables: $request.url, $request.path, $request.headers, $request.body, $prefs, $task, $notify(title, subtitle, message), console.log(message), $done(response)

const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {"Connection": "Close"};
const myData = "Hello Mr Strange.\n\n";

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: myData + JSON.stringify($request.headers)
};

$done(myResponse);
