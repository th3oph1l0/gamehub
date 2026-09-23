from django.urls import path
from . import views

urlpatterns = [
    path('jogos/', views.lista_jogos),
    path('jogos/<int:id_jogo>/', views.excluir_jogo),
]
