# PowerShell 배포 스크립트 (deploy.ps1)
# UTF-8 인코딩 설정 (출력 메시지 한글 깨짐 방지)
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host " 영어 레벨 테스트 배포 프로세스를 시작합니다." -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 1. Git 설치 확인
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git이 설치되어 있지 않거나 PATH에 추가되지 않았습니다. Git을 설치해 주세요."
    exit
}

# 2. Git 초기화
$gitExists = Test-Path .git
if (-not $gitExists) {
    Write-Host "[1/5] Git 저장소를 초기화합니다..." -ForegroundColor Green
    git init
}
if ($gitExists) {
    Write-Host "[1/5] 이미 Git 저장소가 존재합니다." -ForegroundColor Yellow
}

# 기본 브랜치를 main으로 설정
git branch -M main

# 3. 원격 저장소(Remote Origin) 연동
$remoteUrl = "git@github.com:tramper2/EngLevelTest.git"
$existingRemote = git remote get-url origin 2>$null

if ($null -eq $existingRemote) {
    Write-Host "[2/5] 원격 저장소(origin)를 추가합니다: $remoteUrl" -ForegroundColor Green
    git remote add origin $remoteUrl
}
if ($null -ne $existingRemote -and $existingRemote -ne $remoteUrl) {
    Write-Host "[2/5] 원격 저장소 주소를 업데이트합니다..." -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
}
if ($null -ne $existingRemote -and $existingRemote -eq $remoteUrl) {
    Write-Host "[2/5] 이미 올바른 원격 저장소가 설정되어 있습니다." -ForegroundColor Yellow
}

# 4. 파일 추가 및 커밋
Write-Host "[3/5] 변경된 모든 파일을 스테이지에 추가합니다..." -ForegroundColor Green
git add .

Write-Host "[4/5] 커밋을 생성합니다..." -ForegroundColor Green
# 커밋 메시지 작성 (이미 깨끗한 상태인 경우를 고려하여 --allow-empty 포함)
git commit -m "Initial commit: English Level Test web app (Korean version)" --allow-empty

# 5. 원격 저장소 푸시
Write-Host "[5/5] 원격 저장소의 main 브랜치로 푸시합니다..." -ForegroundColor Green
git push -u origin main --force

# 푸시 성공 여부 확인
$pushMainExitCode = $LASTEXITCODE
if ($pushMainExitCode -ne 0) {
    Write-Host "GitHub 원격 저장소로 푸시하는 중 오류가 발생했습니다. SSH 키 등록 여부 및 깃허브 저장소 존재 여부를 확인해 주세요." -ForegroundColor Red
    exit
}

# gh-pages 브랜치 배포 푸시
Write-Host "gh-pages 브랜치로 빌드 배포를 시작합니다..." -ForegroundColor Green
git push origin main:gh-pages --force

$pushPagesExitCode = $LASTEXITCODE
if ($pushPagesExitCode -eq 0) {
    Write-Host ""
    Write-Host "==========================================================================" -ForegroundColor Green
    Write-Host " 성공적으로 깃허브 배포가 완료되었습니다!" -ForegroundColor Green
    Write-Host " 배포된 테스트 사이트 주소:" -ForegroundColor Green
    Write-Host " https://tramper2.github.io/EngLevelTest/" -ForegroundColor Cyan
    Write-Host " (최초 배포 후 접속까지 1~2분 정도 걸릴 수 있습니다.)" -ForegroundColor Yellow
    Write-Host "==========================================================================" -ForegroundColor Green
}
if ($pushPagesExitCode -ne 0) {
    Write-Host "gh-pages 브랜치 푸시에 실패했습니다." -ForegroundColor Red
}
