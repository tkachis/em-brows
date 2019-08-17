import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

import styles from './Contacts.module.css'

const Contacts = () => (
	<div className={`${styles.contacts} ${'container'}`}>
		<div className={styles.map}>
			<YMaps>
				<Map
					defaultState={{ center: [59.944227, 30.35826], zoom: 19 }}
					height={'100%'}
					width={'100%'}
				>
					<Placemark geometry={[59.944227, 30.35826]} />
				</Map>
			</YMaps>
		</div>

		<div className={styles.info}>
			<h1>Contacts:</h1>
			<ul>
				<li>+7 911 091-18-25</li>
				<li>ул. Кирочная 24</li>
				<li>
					<a href="https://www.instagram.com/em.brows/" target={'_blank'}>
						Instagram
					</a>
				</li>
				<li>
					<a href="https://vk.com/martirosova" target={'_blank'}>
						Vkontakte
					</a>
				</li>
			</ul>
		</div>
	</div>
)

export default Contacts
