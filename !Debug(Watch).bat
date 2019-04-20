@echo off
title Debug(Watch)
cls
call sass --watch span-charm.sass span-charm.css
ping -t 5 localhost > nul 