import Card from "../Card"
import './cards.css'


export default function Cards(){
    return(
        <div className="cards">
            <Card
                sign="Aquário"
                image="../src/assets/images/aquario.jpg"
                imageDesc="Signo Aquário"
                startDate="21/01"
                finalDate="19/02"
                />
                <Card
                sign="Peixes"
                image="../src/assets/images/peixes.jpg"
                imageDesc="Signo Peixes"
                startDate="20/02"
                finalDate="20/03"
                />
            
                <Card
                sign="Áries"
                image="../src/assets/images/aries.jpg"
                imageDesc="Signo Áries"
                startDate="21/03"
                finalDate="20/04"
                />
            
                <Card
                sign="Touro"
                image="../src/assets/images/touro.jpg"
                imageDesc="Signo Touro"
                startDate="21/04"
                finalDate="21/05"
                />
            
                <Card
                sign="Gêmeos"
                image="../src/assets/images/gemeos.jpg"
                imageDesc="Signo Gêmeos"
                startDate="22/05"
                finalDate="21/06"
                />
            
                <Card
                sign="Câncer"
                image="../src/assets/images/cancer.jpg"
                imageDesc="Signo Câncer"
                startDate="21/06"
                finalDate="23/07"
                />
            
                <Card
                sign="Leão"
                image="../src/assets/images/leao.jpg"
                imageDesc="Signo Leão"
                startDate="24/07"
                finalDate="23/08"
                />
            
                <Card
                sign="Virgem"
                image="../src/assets/images/virgem.jpg"
                imageDesc="Signo Virgem"
                startDate="24/08"
                finalDate="23/09"
                />
            
                <Card
                sign="Libra"
                image="../src/assets/images/libra.jpg"
                imageDesc="Signo Libra"
                startDate="24/09"
                finalDate="23/10"
                />
            
                <Card
                sign="Escorpião"
                image="../src/assets/images/escorpiao.jpg"
                imageDesc="Signo Escorpiao"
                startDate="24/10"
                finalDate="22/11"
                />
            
                <Card
                sign="Sagitário"
                image="../src/assets/images/sagitario.jpg"
                imageDesc="Signo Sagitário"
                startDate="23/11"
                finalDate="21/12"
                />
            
                <Card
                sign="Caprocórnio"
                image="../src/assets/images/capricornio.jpg"
                imageDesc="Signo Capricórnio"
                startDate="22/12"
                finalDate="20/01"
                />
        </div>
    )
}