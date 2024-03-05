import Books from './pages/books'
import style from './Home.module.css'

export default function Home() {
	return (
		<>
			<div className={style.mainWrapper}>
				<Books />
			</div>
		</>
	)
}
