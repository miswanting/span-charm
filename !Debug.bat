@echo off
title Debug
cls
call sass span-charm.sass span-charm.css
ping -t 5 localhost > nul 