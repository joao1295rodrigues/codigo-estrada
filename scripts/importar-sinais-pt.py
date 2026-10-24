#!/usr/bin/env python3
"""Copia para imagens/terceiros os sinais portugueses de DOMÍNIO PÚBLICO / CC0 do repositório
https://github.com/skifahrer/traffic-signs (CC0), que reúne os ficheiros da Wikimedia Commons com a licença de cada um.
Uso: git clone --depth 1 https://github.com/skifahrer/traffic-signs.git /caminho/traffic-signs
     python3 scripts/importar-sinais-pt.py /caminho/traffic-signs A14 A15 ...
Só copia ficheiros cuja licença nos metadados seja 'Public domain' ou 'CC0'. Cria também imagens/terceiros/LICENCAS.md."""
import glob, json, os, shutil, sys

ALLOWED = {"Public domain", "CC0"}
repo, codes = sys.argv[1], sys.argv[2:]
out = os.path.join(os.path.dirname(__file__), "..", "imagens", "terceiros")
os.makedirs(out, exist_ok=True)
rows = []
for f in glob.glob(os.path.join(repo, "signs", "**", "pt", "*-pt.json"), recursive=True):
    d = json.load(open(f, encoding="utf-8"))
    if d["code"] not in codes:
        continue
    im = d["image"]
    if im["license"] not in ALLOWED:
        print("IGNORADO (licença não permitida):", d["code"], im["license"])
        continue
    names = json.load(open(os.path.join(os.path.dirname(os.path.dirname(f)), d["sign"] + ".json"), encoding="utf-8"))
    dst = f"{d['code']}.svg"
    shutil.copy(os.path.join(os.path.dirname(f), im["file"]), os.path.join(out, dst))
    rows.append((d["code"], names.get("pt", ""), im["license"], im["author"], im["source"]))
rows.sort()
with open(os.path.join(out, "LICENCAS.md"), "w", encoding="utf-8") as fh:
    fh.write("# Sinais portugueses de terceiros (domínio público / CC0)\n\n")
    fh.write("Origem dos ficheiros: Wikimedia Commons, copiados do repositório CC0 https://github.com/skifahrer/traffic-signs, que regista a licença de cada imagem.\n")
    fh.write("**A licença abaixo é a indicada nesses metadados; não foi confirmada por nós ficheiro a ficheiro.** Confirmar na página de origem antes de publicar.\n\n")
    fh.write("| Código | Nome (regulamento) | Licença | Autor indicado | Origem |\n|---|---|---|---|---|\n")
    for r in rows:
        fh.write(f"| {r[0]} | {r[1]} | {r[2]} | {r[3]} | {r[4]} |\n")
print(len(rows), "sinais copiados")
