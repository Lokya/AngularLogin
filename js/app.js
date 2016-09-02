'use strict'
var app = angular.module('mydemo',[]);
app.controller('Mylogin', ['$scope','checkAll',function($scope,checkAll){
	$scope.phone = '';
	$scope.pwd = '';
	$scope.code = '';
	$scope.errorMessage = false;
	$scope.errorWord = '';
	//数据验证
	$scope.Enter = function(){
		$scope.errorMessage = false;
		$scope.errorWord = "";
		if($scope.phone == ''){
			$scope.errorMessage = true;
			$scope.errorWord = "手机号码不能为空";
		}
		else if($scope.pwd == ''){
			$scope.errorMessage = true;
			$scope.errorWord = "密码不能为空";
		}
		else if(checkAll.CkPhone($scope.phone) != ""){
			$scope.errorMessage = true;
			$scope.errorWord = checkAll.CkPhone($scope.phone);
		}
		else if(checkAll.CkPwd($scope.pwd) != ""){
			$scope.errorMessage = true;
			$scope.errorWord = checkAll.CkPwd($scope.pwd);
		}
		else if(checkAll.CkCode($scope.code) != ""){
			$scope.errorMessage = true;
			$scope.errorWord = checkAll.CkCode($scope.code);
		}
		else{
			$scope.errorMessage = false;
			$scope.errorWord = "";
		}
	}
}]).factory('checkAll', [ function(){
	var CheckPhone = function(tel){
		var pattern = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
            if (pattern == false) {
            	console.log(tel);
                return "手机号码格式错误";
            } else{
            	return ""; 
            }   
	}
	var CheckPwd = function(pwd){
		if(pwd != ''){
			if(pwd.length < 6){
				return "密码必须大于6位";
			}else{
				return "";
			}
		}else{
			return "密码不能为空";
		}
	}
	var CheckCode = function(code){
		if(code == ""){
			return "验证码不能为空";
		}else{
			return "";
		}
	}
	return {
		CkPhone:CheckPhone,
		CkPwd:CheckPwd,
		CkCode:CheckCode
	}
}])

