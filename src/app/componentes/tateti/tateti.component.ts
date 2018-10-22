import { Component, OnInit } from '@angular/core';
import { ServicioGamesService } from '../../servicios/servicio-games.service';

@Component({
    selector: 'app-tateti',
    templateUrl: './tateti.component.html',
    styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

    private mensajeResultado: string = "";
    private ahoraSi: boolean = false;


    constructor(private MiServicioGame: ServicioGamesService) { }


    ngOnInit() {

        this.Jugar(this.MiServicioGame);
    }


    Jugar(MiServicioGame: ServicioGamesService) {
        var N_SIZE = 3,
            EMPTY = '&nbsp;',
            boxes = [],
            turn = 'X',
            score,
            moves;

        /**
         * Initializes the Tic Tac Toe board and starts the game.
         */
        function init() {
            var board = document.createElement('table');
            board.setAttribute('border', '1');
            board.setAttribute('cellspacing', '0');

            var identifier = 1;
            for (var i = 0; i < N_SIZE; i++) {
                var row = document.createElement('tr');
                board.appendChild(row);
                for (var j = 0; j < N_SIZE; j++) {
                    var cell: any = document.createElement('td');
                    cell.setAttribute('height', '120');
                    cell.setAttribute('width', '120');
                    cell.setAttribute('align', 'center');
                    cell.setAttribute('valign', 'center');
                    cell.classList.add('col' + j, 'row' + i);
                    if (i == j) {
                        cell.classList.add('diagonal0');
                    }
                    if (j == N_SIZE - i - 1) {
                        cell.classList.add('diagonal1');
                    }
                    cell.identifier = identifier;
                    cell.addEventListener('click', set);
                    row.appendChild(cell);
                    boxes.push(cell);
                    identifier += identifier;
                }
            }

            document.getElementById('tictactoe').appendChild(board);
            startNewGame();
        }

        /**
         * New game
         */
        function startNewGame() {
            score = {
                'X': 0,
                'O': 0
            };
            moves = 0;
            turn = 'X';
            boxes.forEach(function (square) {
                square.innerHTML = EMPTY;
            });
        }

        /**
         * Check if a win or not
         */
        function win(clicked) {
            // Get all cell classes
            var memberOf = clicked.className.split(/\s+/);
            for (var i = 0; i < memberOf.length; i++) {
                var testClass = '.' + memberOf[i];
                var items = contains('#tictactoe ' + testClass, turn);
                // winning condition: turn == N_SIZE
                if (items.length == N_SIZE) {
                    return true;
                }
            }
            return false;
        }

        /**
         * Helper function to check if NodeList from selector has a particular text
         */
        function contains(selector, text) {
            var elements = document.querySelectorAll(selector);
            return [].filter.call(elements, function (element) {
                return RegExp(text).test(element.textContent);
            });
        }

        /**
         * Sets clicked square and also updates the turn.
         */
        function set() {
            if (this.innerHTML !== EMPTY) {
                return;
            }
            this.innerHTML = turn;
            moves += 1;
            score[turn] += this.identifier;
            if (win(this)) {

                if (turn == 'X') {

                    let idJugador = localStorage.getItem("iDjugadorLogueado");

                    let respuesta = MiServicioGame.httpGet_Game("ActualizarPuntaje", "jugador=" + idJugador + "&juego=Tateti&puntaje=1");

                }


                document.getElementById('mensajeModal').innerHTML = "El ganador es: " + turn;

                document.getElementById('id05').style.display = 'block'


                startNewGame();
            } else if (moves === N_SIZE * N_SIZE) {
                alert('Empate');
                startNewGame();
            } else {
                turn = turn === 'X' ? 'O' : 'X';
                document.getElementById('turn').textContent = 'Jugador ' + turn;
            }
        }

        function alertar(turn) {
            alert("en alertar: " + turn);

            // this.reconocerResultados(turn);


        }


        init();
    }




}
