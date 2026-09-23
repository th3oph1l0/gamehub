from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Jogo
from .serializers import JogoSerializer


# GET  /api/jogos/  -> lista os jogos (aceita ?nome=texto para buscar)
# POST /api/jogos/  -> cadastra um jogo novo
@api_view(['GET', 'POST'])
def lista_jogos(request):
    if request.method == 'GET':
        jogos = Jogo.objects.all().order_by('-id')

        nome = request.GET.get('nome')
        if nome:
            jogos = jogos.filter(nome__icontains=nome)

        serializer = JogoSerializer(jogos, many=True)
        return Response(serializer.data)

    # se não foi GET, é POST: cadastra um jogo novo
    serializer = JogoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


# DELETE /api/jogos/1/  -> exclui o jogo de id 1
@api_view(['DELETE'])
def excluir_jogo(request, id_jogo):
    try:
        jogo = Jogo.objects.get(id=id_jogo)
    except Jogo.DoesNotExist:
        return Response({'erro': 'Jogo não encontrado'}, status=404)

    jogo.delete()
    return Response(status=204)
