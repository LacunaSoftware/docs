using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace snippets {

	class Program {

		class SnippetModel {
			public string Name { get; set; }
			public MethodInfo MainMethod { get; set; }
		}

		static void Main(string[] args) {

			var snippets = new List<SnippetModel>();
			var assembly = typeof(Program).Assembly;

			foreach (var classType in assembly.GetTypes().Where(t => t.IsClass && t != typeof(Program))) {
				var mainMethod = classType.GetMethod("Main", BindingFlags.Static | BindingFlags.NonPublic);
				if (mainMethod != null) {
					snippets.Add(new SnippetModel() {
						Name = classType.FullName,
						MainMethod = mainMethod
					});
				}
			}

			snippets = snippets.OrderBy(s => s.Name).ToList();

			Console.WriteLine("Available snippets");
			Console.WriteLine("------------------");
			Console.WriteLine();
			for (int i = 0; i < snippets.Count; i++) {
				Console.WriteLine($"[{i.ToString("D2")}] {snippets[i].Name}");
			}
			Console.WriteLine();

			SnippetModel selectedSnippet = null;
			while (selectedSnippet == null) {
				Console.WriteLine("Enter the snippet number to run:");
				var input = Console.ReadLine();
				if (int.TryParse(input, out int index) && index >= 0 && index < snippets.Count) {
					selectedSnippet = snippets[index];
				}
			}

			try {
				var parameters = new List<object>();
				if (selectedSnippet.MainMethod.GetParameters().Length > 0) {
					parameters.Add(new string[0]);
				}
				selectedSnippet.MainMethod.Invoke(null, parameters.ToArray());
			} catch (Exception ex) {
				Console.WriteLine(ex);
			}

			Console.WriteLine("Done. Press [ENTER] to exit . . .");
			Console.ReadLine();
		}
	}
}
