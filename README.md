# 날씨앱

\*git 설치 후

1.vscode 터미널을 bash로 열기

2.유저 등록
git config --global user.email "메일주소"
git config --global user.name "아이디"

3.github에 레포지토리 만들기

4.레포지토리 주소 복사후 powershell 터미널에
git add .
git commit -m "내용"
git remote add origin 레포지토리 주소
git push origin master

\*배포 1.설치
npm i gh-pages

2.package.json 설정
"scripts":{
...(기존 코드)
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

3.하단에
"homepage":"https://아이디명.github.io/레포지토리명/"

4.배포 실행
npm run deploy
=>마지막에 published가 뜨면 성공

5.파일이 수정되었다면 수정이후
git add .
git commit -m "내용"
git push origin master
npm run deploy
