import Link from "next/link";

export default function DonatePage() {
	return (
		<div className="h-96 flex flex-col items-center justify-center gap-4">
      <p>

				Henüz bağış talep edemiyoruz. Bu konuyu da kapsayan hukukî destek ihtiyacımız için{' '}
				<Link
        className="text-blue-600 dark:text-blue-300"
					href="https://kommunity.com/amel-tech/questions/212ab5a8-a4b3-4cf7-87c9-32ff020b0038"
					target="_blank"
					rel="noopener noreferrer"
				>
					buraya
				</Link>{' '}
				tıklayınız.
			</p>
		</div>
	);
}
