usuario1 = [input('Qual seu nome?\n'), float(
    input('Quanto de XP você possui?\n'))]
quantXP = usuario1[1]
if quantXP < 1001:
    rank1 = "Ferro"
elif quantXP < 2001:
    rank1 = "Bronze"
elif quantXP < 5001:
    rank1 = "Prata"
elif quantXP < 7001:
    rank1 = "Ouro"
elif quantXP < 8001:
    rank1 = "Platina"
elif quantXP < 9001:
    rank1 = "Ascendente"
elif quantXP < 10001:
    rank1 = "Imortal"
else:
    rank1 = "Radiante"

print(
    f'hello {usuario1[0]}, você tem {usuario1[1]:.1f} de XP e teu rank é {rank1}')
