#!/usr/bin/env bash
# Corre dentro de um emulador Android: instala o APK, abre a app e guarda os registos do que aconteceu.
# Uso: bash scripts/emulator-test.sh <apk> <pasta-de-saída> [pacote]
APK="$1"; OUT="$2"; PKG="${3:-codigo.da.estrada.R}"
mkdir -p "$OUT"

{
  echo "== Android =="; adb shell getprop ro.build.version.release; adb shell getprop ro.build.version.sdk; adb shell getprop ro.product.cpu.abi
  echo "== Google Play Services =="; adb shell dumpsys package com.google.android.gms | grep -m1 versionName
  echo "== WebView =="; adb shell dumpsys webviewupdate | head -10
} > "$OUT/dispositivo.txt" 2>&1

adb logcat -c
adb install -r "$APK" > "$OUT/instalacao.txt" 2>&1
adb shell monkey -p "$PKG" -c android.intent.category.LAUNCHER 1 > "$OUT/abrir.txt" 2>&1

sleep 20
adb exec-out screencap -p > "$OUT/ecra-20s.png" 2>/dev/null
sleep 25
adb exec-out screencap -p > "$OUT/ecra-45s.png" 2>/dev/null

{ adb shell pidof "$PKG" && echo "A APP ESTA A CORRER"; } > "$OUT/processo.txt" 2>&1 || echo "A APP NAO ESTA A CORRER (fechou)" >> "$OUT/processo.txt"
adb shell dumpsys activity exit-info "$PKG" > "$OUT/exit-info.txt" 2>&1
adb shell dumpsys window | grep -E "mCurrentFocus|mFocusedApp" > "$OUT/janela.txt" 2>&1
adb logcat -d -v threadtime > "$OUT/logcat-completo.txt" 2>&1
adb logcat -d -b crash -v threadtime > "$OUT/logcat-crash.txt" 2>&1
grep -nE "FATAL EXCEPTION|AndroidRuntime|ANR in|am_crash|am_anr|Process: $PKG|Caused by|SIGSEGV|Fatal signal|UnsatisfiedLinkError|ClassNotFound|NoClassDefFound|MobileAds|GoogleMobileAds|gads|ReactNative" "$OUT/logcat-completo.txt" | head -400 > "$OUT/resumo.txt"
exit 0
