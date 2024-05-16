import csv
import json

# Abrir os arquivos com a codificação UTF-8
with open('contratos2024.csv', 'r', encoding='utf-8') as csvfile, open('contratos2024.json', 'w', encoding='utf-8') as jsonfile:
    fieldnames = ("_id", "nAnuncio", "tipoprocedimento", "objectoContrato", "dataPublicacao", "dataCelebracaoContrato", "precoContratual", "prazoExecucao", "NIPC_entidade_comunicante", "entidade_comunicante", "fundamentacao")
    reader = csv.DictReader(csvfile, fieldnames, delimiter=';')

    out = []
    next(reader)

    for row in reader:
        row['_id'] = int(row['_id'])
        row['precoContratual'] = float(row['precoContratual'].replace(',', '.'))
        row['prazoExecucao'] = int(row['prazoExecucao'])
        out.append(row)

    json.dump(out, jsonfile, indent=4, ensure_ascii=False)
