<script lang="ts">
	import { addDays } from 'date-fns';
	import Clock from '../clock.svelte';

	const getTodayDaysAfterFirst = () => {
		const treatAsUTC = (date) => {
			var result = new Date(date);
			result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
			return result;
		};

		const daysBetween = (startDate, endDate) => {
			var millisecondsPerDay = 24 * 60 * 60 * 1000;
			return (+treatAsUTC(endDate) - +treatAsUTC(startDate)) / millisecondsPerDay;
		};
		return daysBetween(firstJanuary, new Date());
	};

	let firstJanuary = new Date(new Date().getFullYear(), 0, 1);
	let slider = getTodayDaysAfterFirst();

	$: selectedDay = addDays(firstJanuary, slider);

	const maxAlphaEarth = 23.45;
	const alphaSpeyer = 49.3173; // postive for northern hemisphere, negative for southern hemisphere
	const maxAlphaPosition = maxAlphaEarth + alphaSpeyer;

	const lengthOfDay = (day: number) =>
		Math.sin((2 * Math.PI * day) / 365 - Math.PI / 2 - (2 * Math.PI * 355) / 365) * 4 + 12;
</script>

<div class="h-screen grid place-items-center grid-cols-1 bg-gray-200">
	<div class="bg-black rounded-full p-8">
		<div id="analog" class="h-64 w-64 bg-white rounded-full border-black border-[1px]">
			<div
				id="middle"
				class="h-0 w-0 rounded-full bg-black relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black"
			>
				<h1 class="absolute bottom-44 left-1/2 -translate-x-1/2 whitespace-nowrap">
					Tag: {selectedDay.toLocaleDateString('de-DE')} ({(slider + 1).toFixed(0)}. Tag im Jahr) =>
					Tageslänge: {lengthOfDay(slider + 1).toFixed(2)}h
				</h1>
				<div class="absolute bottom-52 left-1/2 -translate-x-1/2 flex space-x-2">
					<input type="range" bind:value={slider} min="0" max="364" />
					<input
						type="button"
						on:click={() => (slider = getTodayDaysAfterFirst())}
						value="Heute"
						class="bg-gray-400 p-1 rounded hover:shadow border-2 border-transparent active:border-2 active:border-black"
					/>
				</div>

				{#each ['🐱', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] as n, i}
					<div
						id={`n-${n}`}
						class="absolute origin-bottom text-white"
						style={`transform: translate(${9 * Math.sin(Math.PI * 2 * (1 / 24) * i)}rem, ${
							-9 * Math.cos(Math.PI * 2 * (1 / 24) * i)
						}rem)`}
					>
						<div class="relative">
							<div class="absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold">
								{n}
							</div>
						</div>
					</div>
					<!-- <div
					id={`n-${n}-path`}
					class="absolute border-[1px] border-black h-32 w-0 origin-bottom bottom-0"
					style={`transform: rotate(${30 * n}deg)`}
				/> -->
				{/each}

				<Clock />
			</div>
		</div>
	</div>
</div>
