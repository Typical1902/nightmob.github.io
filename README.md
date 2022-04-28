
# nightmob better
# in beta
test
> Nightmob is best.<br><br> > <a target="_blank" href="https://heroku.com/deploy/?template=https://github.com/EnginexNetwork/deploy"><img alt="Deploy to Heroku" src="https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg"></a> > <a target="_blank" href="https://replit.com/github/EnginexNetwork/deploy"><img alt="Run on Replit" src="https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg"></a> > <a target="_blank" href="https://glitch.com/edit/#!/import/github/EnginexNetwork/deploy"><img alt="Remix on Glitch" src="https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/glitch.svg"></a>


<!DOCTYPE html>
<html>
	<head class="test1">
		<title>Classes</title>
		<!-- link to main stylesheet -->
		<link rel="stylesheet" type="text/css" href="../css/main.css">
		<link rel="icon" href="https://ssl.gstatic.com/classroom/favicon.png">
		<link rel="stylesheet" type="text/css" href="../css/cursor.css">
        <script src="../js/cursor.js"></script>
		</head>
	<body>
	
	<header>
				<img class="logo" src="../images/msglogo.png"></img>
	<nav>	
		<ul>
        		<li class="nav"><a href="../index.html"> Home! </a></li>
				<li class="nav"><a href="../g_mes/g@mes.html"> G@mes! </a></li>	
				<li class="nav"><a href="../about/about.html"> About </a></li>
				<li class="nav"><a href="nightmob.github.io> Main Site </a></li>
				<li class="nav"><a href="https://discord.gg/ubs5kcYuNW"> Discord </a></li>
				<li class="nav"><a onclick="getSettings()" id="setting"> Settings </a></li>
		</ul>
	</nav>
	</header>
	<div class="node" id="node"></div>
    <div class="cursor" id="cursor"></div>


		<h1 class="games">Game Selection!</h1>
		<h3 class="games">All Games will launch in about:blank, with more  selections then!</h3>
		<h4 class="games">About:blank is hidden from GoGuardian*</h4>
		<h4 class="games">Please note your settings will not work on iframed games, but on local ones, abort + your tab name will work!</h4>
		<h1 class="games">Local Games (Always Unblocked)</h1>
		<p class="games"><a href="cutmath/index.html"> Cut the Rope </a></p>
		<p class="games"><a href="slope/index.html"> Slope </a></p>
<br>
		<h1>Iframed Games (May be blocked)</h1>
		<p class="games"><a href="cubefield.html"> Cubefield! </a></p>
		<p class="games"><a href="discUn.html"> UnDiscord </a></p>
		<p class="games"><a href="littlealc.html"> Little Alchemy </a></p>
		
		<div id="settings"></div>

		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<footer>
    		<ul>
        		<li class="footer"><a href="../index.html"> Home </a></li>
				<li class="footer"><a href="../about/about.html"> About </a></li>
				<li class="footer"><a href="https://github.com/Cattn/msgv2"> Github </a></li>
				<li class="footer"><a href="https://sites.google.com/stu.palmbeachschools.org/mathlearningcenter/home"> Main Site </a></li>
				<li class="footer"><a href="https://discord.gg/mathstudy"> Discord </a></li>
			</ul>
		</footer>
		<script src="js/abort.js"></script>
		<script src="../js/test.js"></script>
		<script src="../js/settings.js"></script>
		<script>
            var initCursor = new NodeCursor({
                cursor: true,
                node: true,
                cursor_velocity: 1,
                node_velocity: .5,
                native_cursor: 'none',
                element_to_hover: '.nodeHover',
                cursor_class_hover: 'disable',
                node_class_hover: 'expand',
                hide_mode: true,
                hide_timing: 2000,
            });
        </script>
	</body>
</html>








let express = require("express"),
  app = express(),
  https = require("https"),
  http = require("http"),
  { response } = require("express");
app.use("/", async (req, res) => {
  let url = req.query.url;
  if (!url) return res.send("Please provide a valid url");
  console.log(url)
  let parsedHost = url.replace(/https?:\/\//gi, "");
  let options = {
    hostname: parsedHost,
    port: url.startsWith("https://") ? 443 : 80,
    path: req.url,
    method: req.method,
    headers: {
      "User-Agent": req.headers["user-agent"]
    }
  };

  (url.startsWith("https://") ? https : http)
    .request(options, serverResponse => {
      let body = "";
      if (
        String(serverResponse.headers["content-type"]).indexOf("text/html") !==
        -1
      ) {
        serverResponse.on("data", function(chunk) {
          body += chunk;
        });
        serverResponse.on("end", function() {
          body = body.replace(`example`, `Cat!`);
          res.writeHead(serverResponse.statusCode, serverResponse.headers);
          res.end(body);
        });
      } else {
        serverResponse.pipe(
          serverResponse,
          {
            end: true
          }
        );
        res.contentType(serverResponse.headers["content-type"]);
      }
    })
    .end();
});
app.listen(3000);
console.log("Running on 0.0.0.0:3000");



        src="https://debbiewatermanphd.com/uploads/5/5/6/7/5567194/custom_themes/230188292910318641/files/rb1.html"> Retro Bowl </a></li>

