@echo off
setlocal enabledelayedexpansion

:: Get the dynamic Wi-Fi IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /R "IPv4.*192\."') do (
    set IP=%%a
    set IP=!IP: =!
)

:: Set project path
set PROJECT_PATH=C:\Users\RM\Music\NDUKO

:: Check if IP was found
if "%IP%"=="" (
    echo Could not determine Wi-Fi IP address.
    pause
    exit /b
)

:: Check if php artisan serve is already running
tasklist /FI "IMAGENAME eq php.exe" | find /I "php.exe" >nul
if %ERRORLEVEL% equ 0 (
    echo php artisan serve is already running at http://nduko.shop
    goto END
)

:: Start php artisan serve with dynamic IP
echo Starting php artisan serve on %IP%...
cd /d "%PROJECT_PATH%"
php artisan serve --host=%IP% --port=8000

:END
echo Access your project at http://nduko.shop
pause
