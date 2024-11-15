import { Text, View } from "react-native";

export default function Cadastro() {
  return (
    <View>
        
        <div>
            <p>
                Para acessar o histórico é necessário possuir um cadastro. <br /> Por favor, crie sua conta:
            </p>

            <h1>Cadastre-se</h1>

            <form>
                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Senha:
                    <input type="password" name="senha" />
                </label>
                
                <button>Criar Conta</button>
                <button> <img src="" alt="" />Entrar com Google</button>

            </form>

        </div>
    </View>
  );
}



