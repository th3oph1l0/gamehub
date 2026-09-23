from rest_framework import serializers
from .models import Jogo


class JogoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jogo
        fields = ['id', 'nome', 'genero', 'ano', 'finalizado']
