import os
# Be sure to have the logo in /<parentfolder>/logo.png

print("Tutorial page generator. You should be in the /installtech/ folder")


software_title_human_read = input('Software Name (Human readable. Capitalized first letter) Ex:"Zoom":')
tutorialname = input('Tutorial Name (Human Readable) Appears in the main content of the page in <h2> as the title("How to Join a Zoom Meeting"):')
videosrc = input('Video File Name ("zoom-join-meeting.mp4"):')
parentfoldername = input('Parent folder Name. Should be the name of the software, in lowercase ( "zoom"):')
childfoldername = input('child folder Name. Should be the goal of the tutorial, in lowercase and hyphenated ( "join-meeting"):')

print("For the search function\n")
print(f'{{name: "{tutorialname}",\
        software: "{software_title_human_read}",\
        url: "../{parentfoldername}/{childfoldername}"}},')

# ../%s/%s/index.html
#make folders if not exist
makefolder = '../'+parentfoldername
if not os.path.exists(makefolder):
    os.makedirs(makefolder)
makefolder = makefolder + "/"+childfoldername
if not os.path.exists(makefolder):
    os.makedirs(makefolder)

htmlpage = '''
<!DOCTYPE HTML>
<!--
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>%s - %s | InstAllTech</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../../assets/css/main.css" />
	</head>
	<body class="is-preload no-sidebar">
		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">

						<!-- Logo -->
							<div id="logo">
								<img src="../../instAllTech/logo-2-wrench_rotate-text.png" alt="InstAllTech Logo">
								<h1><a href="../../index.html">InstAllTech</a></h1>
							</div>

						<!-- Nav -->
							<nav id="nav">
								<ul>
									<!-- <li class="current"><a href="index.html">Welcome</a></li>
									<li><a href="tutorial-landingpage-template.html">Tutorial Page</a></li>
									<li><a href="elements.html">Elements</a></li> -->
									<li>	
										<section id="search" class="alt">
											<script>
												function clickPress(event) {
													if (event.keyCode == 13) {
														let searchterms = document.getElementById('query').value;
														let newurl = "./search/index.html?query="+searchterms;
														window.location.href = newurl;
													}
												}
											</script>
											<form id="searchbar" onsubmit="clickPress(13);" target="_blank">
												<input type="text" name="query" id="query" placeholder="Search" onkeypress="clickPress(event)"/>
											</form>
										</section>
									</li>
								</ul>
							
							</nav>
					</header>
				</div>

			<!-- Main -->
				<div id="main-wrapper">
					<div class="container">
						<div id="content">

							<!-- Content -->
								<article>
									<img id="tutorialsoftwarelogo" src="../../%s/logo.png" alt="" />

									<h2>%s</h2>
									
									<!-- <p>A short sentence or 2 about what this tutorial tries to do.</p> -->
									
									<div id="tutorialvideodiv">
										<iframe id = "tutorialvideo" src="%s"></iframe>
									</div>
									
									<br/>

									<ol>
									
									</ol>

									<h3>Additional Resources</h3>
									<ul id="addlcontent" class="actions">
										<li><a href="#" class="button">Additional Link 1</a></li>
										<li><a href="#" class="button">Additional Link 2</a></li>
										<li><a href="#" class="button">Additional Link 3</a></li>
									</ul>
								</article>
						</div>
					</div>
				</div>

			<!-- Footer -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
							<div class="col-3 col-6-medium col-12-small" style="text-align: center;">
								<!-- TODO: Fix CSS for this -->
								
								<!-- Contact -->
									<section class="widget contact">
										<h3>Contact Us</h3>
										<ul>
											<li><a href="https://github.com/InstAllTechWebsite/InstAllTechWebsite.github.io" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
											<!-- <li><a href="#" class="icon brands fa fa-envelope-open"><span class="label">Email</span></a></li> -->
										</ul>
									</section>

							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy; InstAllTech. All rights reserved</li>
										<li>Created by: 
											Ruipu Hu,
											Angela Ngo,
											Megan Rutch, and 
											Lucas Soohoo
										</li>
										<li>Design: <a href="https://html5up.net/verti">HTML5 UP</a></li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>

			</div>

		<!-- Scripts -->

			<script src="../../assets/js/jquery.min.js"></script>
			<script src="../../assets/js/jquery.dropotron.min.js"></script>
			<script src="../../assets/js/browser.min.js"></script>
			<script src="../../assets/js/breakpoints.min.js"></script>
			<script src="../../assets/js/util.js"></script>
			<script src="../../assets/js/main.js"></script>

	</body>
</html>''' % (tutorialname, software_title_human_read, parentfoldername, tutorialname, videosrc)

with open('../%s/%s/index.html' %(parentfoldername, childfoldername), 'a') as f:
    f.write(htmlpage)
