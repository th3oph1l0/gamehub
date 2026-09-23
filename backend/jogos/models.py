from django.db import models


class Jogo(models.Model):
    nome = models.CharField(max_length=100)
    genero = models.CharField(max_length=50)
    ano = models.IntegerField()
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return self.nome
