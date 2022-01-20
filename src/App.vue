<template>
  <div class="wrapper">
		<head>
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="head_wrapper">
							<div class="logo_man_head">
								<img src="@/img/logo_man.gif">
							</div>
							<div class="site_name">
								<a href="#">kram-music</a>								
								<span>музыкальный портал Краматорска</span>
							</div>
							<div class="logo_notes_head">
								<img src="@/img/logo_notes.png">
							</div>
						</div>
					</div>				
				</div>						
			</div>
		</head>
		<main>
			<div class="container-fluid">
				<div class="row">
					<div class="col-3">
						<div class="sidebar_left">
							<div class="part_side">								
								<form>
									<input type="" name="" placeholder="Логин">
									<input type="password" name="" placeholder="Пароль">
									<input class="form_submit" type="submit" name="" value="Войти">
									<a href="">регистрация</a>
								</form>								
							</div>
							<div class="part_side">
								<span>Хочу сделать что-то вроде музыкального портала города на котором публиковались бы новости музыкальной сферы и афиши событий. Также музыканты Краматорска могли бы, к примеру, презентовать свои новые треки.</span>								
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="main_space">
							<a href="#" class="news">
								<div class="news_img">
									<img src="@/img/news/news1.jpg">
								</div>
								<div class="news_text">
									<strong>SCORPIONS выпускают девятнадцатый альбом. «Я постоянно слышу, что рок мертв. Но...</strong>
								</div>								
							</a>
							<a href="#" class="news">
								<div class="news_img">
									<img src="@/img/news/news2.jpg">
								</div>
								<div class="news_text">
									<strong>Новая модная метал-группа с женским вокалом (кстати...</strong>
								</div>								
							</a>
							<a href="" class="news">
								<div class="news_img">
									<img src="@/img\news\news3.jpg">
								</div>
								<div class="news_text">
									<strong>Музыкальные итоги 2021 года: новогоднее видеоинтервью с Яном Женчаком</strong>
								</div>
							</a>
						</div>
					</div>
					<div class="col-3">
						<div class="sidebar_right">
							<div class="part_side">
								<input type="search" name="" placeholder="Поиск">
							</div>
							<div class="part_side">
								<span>На мой взгляд очень актуальная тема, т.к. у нас много людей создающих свою музыку, при этом инфомация о них в сети очень разрознена, а иногда вообще почти не представлена (за исключением пары чатов в telegram и страниц в социальных сетях).</span>								
							</div>
						</div>
					</div>		
				</div>
			</div>		
		</main>
		<footer>
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="footer_wrapper">
							
						</div>
					</div>				
				</div>						
			</div>
		</footer>
	</div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';
#app {

}
* {
	font-family: intro_bold_italic;
	color: #000000;
}
input:focus {
	outline: 0;
}
a, a:active {
	text-decoration: none;
}
@font-face {
	font-family: "intro_bold_italic"; 
	src: url("fonts/Intro_Bold_Italic/intro_bold_italic.ttf") format("truetype"); 
	font-style: normal; 
	font-weight: normal; 
}
.wrapper {
	background-image: url('img/all_background.jpg');
	min-height: 100%;
}
.head_wrapper {
	display: flex;
	align-items: center;
	box-shadow: 0 0 12px 1px rgb(0 0 0 / 30%);	
	margin: 10px auto;
	height: 150px;
	border-radius: 15px;
	background-image: linear-gradient(135deg, #ffae27 0%, #c7200f 100%);
}
.site_name {
	height: 100%;	
	margin-left: 30px;
	display: flex;	
	flex-direction: column;
	margin-top: 70px;
}
.site_name a {	
	font-size: 7vw;	
	line-height: 100%;
	color: #000000;
	white-space: nowrap;
}
.site_name span {
	line-height: 100%;
}
.sidebar_left {			
}
.sidebar_right {		
}
.footer_wrapper {	
	box-shadow: 0 0 12px 1px rgb(0 0 0 / 30%);
	height: 150px;
	margin: 10px auto;
	border-radius: 20px;	
	background-image: url('img/footer_background.jpg');
}
.logo_man_head {
	display: flex;
	align-items: flex-end;	
	height: 100%;
	padding-left: 15px;
}
.logo_man_head img {	
	height: 90%;		
}
.logo_notes_head {
	display: flex;
	align-items: flex-end;	
	height: 100%;
	padding-left: 30px;
}
.logo_notes_head img {	
	height: 90%;		
}
.part_side {
	text-align: center;
	background-color: #ffffff;
	padding: 10px;
	border-radius: 15px;
	background-image: url('img/part_background.jpg');
	margin: 10px 0;
}
.part_side * {	
	width: 95%;
	text-align: center;
	margin: 5px;	
	color: #ffffff;
}
.part_side form a {
	color: #ffffff;
}
.form_submit {
	max-width: 70px;
	border-radius: 5px;
	border: none;	
	background-color: #ff8100;
}
.form_submit:hover {		
	background-color: #ffd400;
}
.news {
	max-height: 130px;		
	background-color: #ffffff;
	margin: 10px;
	display: flex;
	background: rgba(25,30,55,0.8);	
}
.news_img {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 30%;
	margin: 0 10px;
}
.news_img img {	
	height: 80%;
	max-width: 100%;	
}
.news strong {
	display: block;
	color: #ffffff;
	margin: 0 10px;
}
.news_text {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
