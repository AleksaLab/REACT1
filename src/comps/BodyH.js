import '../main.css';
import innow from '../photos/innow.mp4';

function BodyHm() {
    return(
        <bodyy class = "body1">
            <wst class="wst">O NAS</wst> 
            <mms class="tex">
            Co to Trade Mate?<br></br><br></br>
           <p> Trade Mate to firma, która wyróżnia się na rynku tuningowym dzięki niezrównanej pasji do samochodów i precyzji w personalizacji. Nasza ekipa doświadczonych specjalistów nie tylko podnosi osiągi pojazdów, ale także tworzy unikatowe projekty, które zachwycają każdego miłośnika motoryzacji. </p>

           
            <br></br>
            
            <p>Nasz warsztat to miejsce, gdzie marzenia o idealnym samochodzie stają się rzeczywistością. Niezależnie od tego, czy chcesz poprawić osiągi, zmienić wygląd zewnętrzny czy wnętrze auta, nasz zespół służy fachowym doradztwem i kompleksową obsługą. </p>
            
            <br></br>
            <p>Trade Mate to nie tylko firma, to miejsce, gdzie pasja spotyka się z profesjonalizmem, a każdy projekt staje się wyjątkowym dziełem sztuki na czterech kółkach. Sprawdź naszą społeczność entuzjastów motoryzacji i odkryj, jak możemy uczynić Twój samochód jeszcze bardziej wyjątkowym!</p>
            
            
            
        </mms>
        <div class="bod2">
            <video class="img2" src={innow} autoPlay loop muted alt="logo"/>

                <div class="tex"> Oprócz tuningów wyróżniamy się na rynku modernizacji klasycznych modeli aut, które są znane na całym świecie. <br></br> Nasza pasja do motoryzacji pozwala nam nie tylko przywrócić ducha samochodom o pamiętliwej aurze, ale także nadać im nowoczesne elementy, które sprawiają, że te ikony motoryzacji stają się jeszcze bardziej wyjątkowe. Jesteśmy dumni z naszych projektów, które zachwycają klientów z całego globu i pozwalają cieszyć się klasycznymi samochodami w nowoczesnym wydaniu. </div>

        </div>

    </bodyy>

    )
}

export default BodyHm;