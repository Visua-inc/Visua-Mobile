import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Layout from '@/components/layout'

export default function Reproducao() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <View style={styles.container}>
      <Layout>
        <View style={styles.textContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem
              maxime voluptates harum porro sequi autem temporibus quo ducimus
              ipsum blanditiis cum, voluptatem a ea assumenda pariatur possimus
              necessitatibus molestias! Consectetur iusto debitis provident
              inventore ut! Quia, quam adipisci. Sequi aliquid dolores error
              itaque in, veritatis nihil veniam nesciunt consequatur esse optio
              repellendus neque, corrupti labore voluptatum architecto quod
              molestias maiores temporibus assumenda recusandae asperiores
              minima enim? Pariatur illum repudiandae libero veniam itaque sunt,
              necessitatibus, cumque sint magni deserunt consectetur ab possimus
              quos ipsam optio est dolorem nisi, laboriosam provident. Ipsum
              dolor est quis natus sequi officiis ex error harum! In, officiis?
              Obcaecati, adipisci temporibus. Dicta nam, eligendi, dignissimos
              similique atque alias accusamus pariatur, autem necessitatibus
              quasi nesciunt sunt fugit eaque distinctio aspernatur. Minima
              explicabo modi ipsa! Voluptas facere molestiae fuga quisquam id
              asperiores minima, cumque odio odit quos. Officia iste eligendi
              reiciendis adipisci a, est inventore cum sapiente eum ad! Maxime
              voluptatem facilis cupiditate numquam nesciunt similique quod
              exercitationem, error molestias autem optio non tempore tenetur
              deleniti perspiciatis aliquid, sed, vero odit odio adipisci.
              Assumenda, dolores. Veniam libero adipisci, veritatis nobis ipsam
              in quae temporibus obcaecati! Voluptas aliquid ut voluptates! Rem
              natus accusamus aperiam ipsam eaque perspiciatis quidem veniam
              doloribus assumenda culpa, pariatur voluptate dolore quibusdam
              architecto incidunt officiis vel quod repellat? Odio soluta
              quisquam facere consectetur. Veritatis commodi aliquid autem est
              vel alias, quibusdam debitis delectus reiciendis deserunt
              aspernatur esse, explicabo saepe repellat mollitia suscipit
              perferendis repudiandae quam iste tempora molestiae soluta?
              Exercitationem at cupiditate quis repellendus ullam libero
              deleniti assumenda officiis possimus iusto quos sequi quam
              deserunt ea eveniet blanditiis impedit, minima, quidem facere,
              aliquid quisquam distinctio ipsa nisi. Impedit, ipsam cum quos
              laborum, totam deleniti accusamus nemo tenetur placeat eligendi
              vel sint voluptatibus dicta exercitationem alias. Unde,
              perspiciatis adipisci accusamus totam in fugiat, qui pariatur
              eligendi delectus debitis ratione esse inventore quaerat odio
              dolorem necessitatibus officia nulla! Excepturi quia cumque
              laborum maiores soluta, consectetur quidem obcaecati quis
              consequuntur quisquam nihil ipsa reiciendis blanditiis amet
              aspernatur rerum ea delectus voluptas ratione iure itaque?
              Assumenda quos veniam sit iusto. Atque minima facere quidem nihil
              veritatis earum illo ullam suscipit vero quisquam amet esse, quis
              sunt reiciendis architecto ducimus molestias possimus enim odio!
              Optio laudantium eum non tempora asperiores. Sit placeat qui,
              iusto, commodi architecto reprehenderit repellat distinctio porro
              quasi laborum a doloremque minus perspiciatis? Rem at reiciendis
              velit similique! Blanditiis esse natus excepturi? Dolore suscipit
              veritatis voluptatum optio soluta obcaecati aliquid dolorum, animi
              quos voluptates velit ratione excepturi consequuntur, ullam sunt?
              Enim repellat, vel aliquid culpa autem dolorem beatae eligendi
              eaque illum, voluptas officiis amet velit, quae at labore minus.
              Omnis aperiam iure quae eius itaque voluptatum recusandae vitae
              labore odio vel, soluta cupiditate quibusdam doloribus harum sit
              dolore sunt animi ipsam ducimus. Aperiam quia numquam soluta.
              Nulla in fugiat obcaecati soluta maiores. Saepe placeat atque quo
              ab consequatur error, doloribus hic sint architecto impedit,
              provident unde nemo repellendus! Consequuntur illum quisquam ipsa
              velit veritatis quia ullam quis, fugiat laboriosam consectetur ab,
              adipisci nam, veniam tenetur expedita reiciendis minima impedit
              aliquid doloremque quam nihil architecto? Error sunt adipisci
              quod, illo voluptates minus expedita nihil, illum, neque corporis
              doloribus nobis tempora nisi. Dignissimos blanditiis, porro ad
              facere aut quisquam. Recusandae dignissimos beatae eaque ad
              facilis rerum impedit temporibus! Incidunt praesentium laudantium
              sunt quibusdam totam et soluta quidem ullam odit, natus, nobis
              sint, animi culpa assumenda possimus cumque inventore commodi
              placeat reprehenderit repudiandae voluptate. Accusantium iusto
              officia enim fuga? Laudantium, accusamus impedit? Veritatis eius
              ad vero magni eligendi, doloremque nulla at earum. Sint
              necessitatibus dolores molestias nam praesentium commodi corrupti
              rem, et id, enim tenetur quis voluptas, laudantium voluptates
              minus eos adipisci. Necessitatibus, sunt fuga impedit atque
              facilis nam rerum. Repellendus tempore vel, sequi perferendis
              exercitationem eius, possimus, corrupti quo ipsa harum doloremque
              aperiam qui consequuntur architecto accusantium laboriosam numquam
              voluptatibus? Sunt, velit saepe! Reprehenderit sapiente ipsum
              dolorum animi eius deserunt harum assumenda, at consequatur
              officia dolores numquam doloribus laboriosam beatae possimus
              perferendis molestias totam quas accusamus deleniti eum itaque
              cupiditate. Vero iure iste assumenda doloremque consequuntur
              similique voluptatum, odit autem iusto exercitationem esse tempore
              voluptatem vel aliquam recusandae eum nisi quaerat, laborum qui
              officia sint sunt explicabo! Adipisci a, at magnam amet, aliquam
              ab officia debitis, eaque nemo minus delectus. Illo veniam nisi
              porro rerum sed soluta. Debitis ut laborum modi fuga laudantium
              accusamus sit possimus deleniti similique, ipsum soluta explicabo
              tenetur eius deserunt?
            </Text>
          </ScrollView>
        </View>
      </Layout>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#172F3B',
  },
  textContainer: {
    zIndex: 3,
    flex: 1,
    backgroundColor: '#1A222A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginTop: 10,
    width: '100%',
    height: '50%',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    textAlign: 'left',
  },
})
